// Avatar initials, grapheme-safe. Plain `name.split(' ').map(w => w[0])`
// splits Devanagari mid-grapheme — e.g. "सुनीता"[0] is "स" but the visible
// first character (with its vowel sign) may span more than one UTF-16 code
// unit. Intl.Segmenter (built in, no dependency) gives us real grapheme
// clusters; we fall back to Array.from for engines without it.
const segmenter =
  typeof Intl !== 'undefined' && 'Segmenter' in Intl
    ? new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    : null

function firstGrapheme(word: string): string {
  if (!word) return ''
  if (segmenter) {
    const first = segmenter.segment(word)[Symbol.iterator]().next()
    if (!first.done) return first.value.segment
  }
  return Array.from(word)[0] ?? ''
}

/** First grapheme of up to the first two words, e.g. "सुनीता देवी" -> "सद". */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean).map(firstGrapheme)
  return parts.slice(0, 2).join('')
}
