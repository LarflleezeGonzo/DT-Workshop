// Zero-dependency translation catalog. Each key holds a [hi, en] tuple so
// the pair is reviewable side by side and neither locale can silently drift.
// Hindi is the default locale (see LanguageContext.tsx); English is the toggle.
//
// A value may contain simple inline HTML (e.g. <strong>) — those are meant
// to be rendered through the <T> component (dangerouslySetInnerHTML). Plain
// values are meant for useLang().t(), used directly as JSX text/attributes.
// All content here is authored by us, never user input, so this is safe.
export const M = {
  // ---------------------------------------------------------------- common
  'common.appName': ['AAM Connect', 'AAM Connect'],
  'common.loading': ['लोड हो रहा है…', 'Loading…'],
  'common.notFound': ['बैठक नहीं मिली।', 'Meeting not found.'],
  'common.confirmed': ['पुष्ट', 'Confirmed'],
  'common.pending': ['लंबित', 'Pending'],
  'common.view': ['देखें ›', 'View ›'],
  'common.pleaseWait': ['कृपया प्रतीक्षा करें…', 'Please wait…'],
  'common.goBack': ['वापस जाएं', 'Go back'],
  'common.priorityHigh': ['उच्च', 'High'],
  'common.priorityMedium': ['मध्यम', 'Medium'],
  'common.priorityRoutine': ['नियमित', 'Routine'],

  // ------------------------------------------------------------------ nav
  'nav.home': ['होम', 'Home'],
  'nav.agenda': ['एजेंडा', 'Agenda'],
  'nav.tasks': ['कार्य', 'Tasks'],
  'nav.profile': ['प्रोफ़ाइल', 'Profile'],

  // ---------------------------------------------------------------- login
  'login.subtitle': ['स्वास्थ्य कार्यकर्ता साइन-इन', 'Health worker sign-in'],
  'login.heading': ['CHO के रूप में साइन इन करें', 'Sign in as CHO'],
  'login.body': [
    "अपना पंजीकृत मोबाइल नंबर डालें। हम इसे सत्यापित करने के लिए एक बार का कोड भेजेंगे।",
    "Enter your registered mobile number. We'll send a one-time code to verify it's you.",
  ],
  'login.demoBanner': [
    '<strong>डेमो मोड</strong> — कोई भी 10 अंकों का मोबाइल नंबर डालें, फिर अगली स्क्रीन पर कोड <strong>123456</strong> का उपयोग करें।',
    '<strong>Demo mode</strong> — enter any 10-digit mobile number, then use code <strong>123456</strong> on the next screen.',
  ],
  'login.mobileLabel': ['मोबाइल नंबर', 'Mobile number'],
  'login.mobilePlaceholder': ['98XXX XX214', '98XXX XX214'],
  'login.sendOtp': ['OTP भेजें', 'Send OTP'],
  'login.choOnlyNote': [
    'पहुंच अभी केवल <strong>सामुदायिक स्वास्थ्य अधिकारी (CHO)</strong> तक सीमित है। ANM और ASHA साइन-इन जल्द आ रहा है।',
    'Access is currently limited to <strong>Community Health Officers (CHO)</strong>. ANM and ASHA sign-in is coming soon.',
  ],

  // ----------------------------------------------------------------- otp
  'otp.title': ['OTP सत्यापित करें', 'Verify OTP'],
  'otp.subtitle': ['{phone} पर कोड भेजा गया', 'Code sent to {phone}'],
  'otp.heading': ['6 अंकों का कोड डालें', 'Enter the 6-digit code'],
  'otp.body': [
    'कोड नहीं मिला? अपना SMS इनबॉक्स जांचें — कोड आने में एक मिनट लग सकता है।',
    "Didn't get it? Check your SMS inbox — codes may take a minute to arrive.",
  ],
  'otp.demoBanner': [
    '<strong>डेमो मोड</strong> — कोड <strong>123456</strong> का उपयोग करें।',
    '<strong>Demo mode</strong> — use code <strong>123456</strong>.',
  ],
  'otp.autofill': ['कोड भरें', 'Fill code'],
  'otp.label': ['वन-टाइम पासवर्ड', 'One-time password'],
  'otp.verify': ['सत्यापित करें और आगे बढ़ें', 'Verify & Continue'],
  'otp.invalidCode': [
    'गलत कोड। इस डेमो के लिए 123456 का उपयोग करें।',
    'Invalid code. Use 123456 for this demo.',
  ],

  // ----------------------------------------------------------- restricted
  'restricted.heading': ['अभी केवल CHO पहुंच', 'CHO access only, for now'],
  'restricted.body': [
    "यह नंबर सामुदायिक स्वास्थ्य अधिकारी के रूप में पंजीकृत नहीं है। AAM Connect अभी केवल CHO साइन-इन का समर्थन करता है — ANM और ASHA पहुंच जल्द शुरू हो रही है।",
    "This number isn't registered as a Community Health Officer. AAM Connect currently supports CHO sign-in only — ANM and ASHA access is being rolled out next.",
  ],
  'restricted.tryAgain': ['दूसरा नंबर आज़माएं', 'Try a different number'],

  // ----------------------------------------------------------- dashboard
  'dash.greeting': ['नमस्ते, {name}', 'Namaste, {name}'],
  'dash.location': ['{facility} · {district} ज़िला', '{facility} · {district} district'],
  'dash.statMeetings': ['इस माह की बैठकें', 'Meetings this month'],
  'dash.statPendingTasks': ['लंबित कार्य', 'Pending tasks'],
  'dash.statAttendance': ['उपस्थिति', 'Attendance'],
  'dash.upcomingChip': ['आगामी', 'Upcoming'],
  'dash.distanceAway': ['{km} किमी दूर', '{km} km away'],
  'dash.openMeeting': ['बैठक खोलें ›', 'Open meeting ›'],
  'dash.teamStatus': ['टीम स्थिति', 'Team status'],
  'dash.anmConfirmed': ['ANM ✓ पुष्ट', 'ANM ✓ confirmed'],
  'dash.ashaPending': ['{n} ASHA लंबित', '{n} ASHA pending'],
  'dash.yourTeamRank': ['सेक्टर टीम रैंक #{rank}', 'Sector team rank #{rank}'],
  'dash.teamTargetPct': ['{pct}% मासिक लक्ष्य पूरा', '{pct}% of monthly target complete'],
  'dash.scheduleBtn': ['+ AAM बैठक शेड्यूल करें', '+ Schedule AAM Meeting'],

  // -------------------------------------------------------------- agenda
  'agenda.title': ['बैठकें', 'Meetings'],
  'agenda.subtitle': ['प्राथमिकता के अनुसार क्रमबद्ध', 'Sorted by priority'],
  'agenda.thisWeek': ['इस सप्ताह', 'This week'],
  'agenda.confirmedCount': ['{n}/{m} पुष्ट', '{n}/{m} confirmed'],

  // -------------------------------------------------------------- meeting
  'meeting.headerFallback': ['बैठक', 'Meeting'],
  'meeting.participants': ['प्रतिभागी', 'Participants'],
  'meeting.suggestedAgenda': ['सुझाया गया एजेंडा', 'Suggested agenda'],
  'meeting.fromAnalytics': ['विश्लेषण से', 'from analytics'],
  'meeting.recordToggle': ['इस बैठक को रिकॉर्ड और ट्रांसक्राइब करें', 'Record & transcribe this meeting'],
  'meeting.recordToggleSub': ['वैकल्पिक · बाद में एक लिखित सारांश पाएं', 'Optional · get a written summary afterwards'],
  'meeting.privacyTitle': ['केवल आपकी आवाज़, केवल इस बैठक के लिए।', 'Only your voice, only for this meeting.'],
  'meeting.privacyBody': [
    "कुछ भी कहीं और नहीं भेजा जाता, और आप किसी भी समय रिकॉर्डिंग रोक या हटा सकते हैं। यह किसी को हाथ से मिनट्स लिखने से बचाने के लिए है — जो कहा गया उसकी निगरानी के लिए नहीं।",
    "Nothing is sent anywhere else, and you can stop or discard the recording at any point. It's here to save someone from having to write minutes by hand — not to monitor what's said.",
  ],
  'meeting.startRecord': ['बैठक शुरू करें और रिकॉर्ड करें', 'Start meeting & record'],
  'meeting.startAttendance': ['बैठक शुरू करें और उपस्थिति दर्ज करें', 'Start meeting & mark attendance'],

  // ------------------------------------------------------------- recording
  'rec.headerFallback': ['रिकॉर्डिंग', 'Recording'],
  'rec.subtitle': ['रिकॉर्डिंग और ट्रांसक्रिप्शन', 'Recording & transcribing'],
  'rec.paused': ['रुका हुआ', 'Paused'],
  'rec.recording': ['रिकॉर्डिंग जारी', 'Recording'],
  'rec.privacyBody': [
    "यह ट्रांसक्रिप्ट केवल आवाज़ से स्वतः तैयार होता है — कोई वीडियो नहीं, कोई पृष्ठभूमि सुनना नहीं। सहेजे जाने के बाद यह इस बैठक की टीम को दिखता है, और आप इसे सहेजे जाने से पहले कभी भी हटा सकते हैं।",
    "This transcript is auto-generated from voice only — no video, no background listening. It's visible to this meeting's team once saved, and you can discard it any time before then.",
  ],
  'rec.liveTranscript': ['लाइव ट्रांसक्रिप्ट', 'Live transcript'],
  'rec.pause': ['‖ रोकें', '‖ Pause'],
  'rec.resume': ['▸ जारी रखें', '▸ Resume'],
  'rec.stopSave': ['रोकें और ट्रांसक्रिप्ट सहेजें', 'Stop & save transcript'],
  'rec.discard': ['रिकॉर्डिंग हटाएं', 'Discard recording'],
  'rec.t1': [
    "चलिए पिछले महीने के फॉलो-अप से शुरू करते हैं — रेफरल मामलों में हम कहां हैं?",
    "Let's start with last month's follow-ups — where are we on the referral cases?",
  ],
  'rec.t2': [
    "दोनों बंद हो गए हैं। खेड़ा गांव के बच्चे ने पिछले सप्ताह इलाज पूरा कर लिया।",
    'Both are closed. The child in Kheda village completed treatment last week.',
  ],
  'rec.t3': [
    'अच्छा। राधा, आपके क्षेत्र में टीकाकरण अभियान कैसा रहा?',
    'Good. Radha, how did the immunisation drive go in your area?',
  ],
  'rec.t4': [
    'हमने 20 में से 18 बच्चों को कवर किया। दो परिवार यात्रा पर थे, मेरे पास उनके नंबर हैं।',
    'We covered 18 of 20 children. Two families were travelling, I have their numbers.',
  ],
  'rec.t5': [
    'मैं इसे फॉलो-अप कार्य के रूप में नोट करूंगा। अब, NCD स्क्रीनिंग — क्या हम लक्ष्य के अनुसार चल रहे हैं?',
    "I'll note that as a follow-up task. Now, NCD screening — are we on track for the target?",
  ],
  'rec.t6': [
    'हमने अब तक 30 में से 12 घरों का सर्वेक्षण किया है। दो और दिन चाहिए।',
    "We've surveyed 12 of 30 households so far. Need two more days.",
  ],
  'rec.t7': [
    'एक और बात — ORS स्टॉक की कमी तीन बार सामने आ चुकी है, हमें इसे ब्लॉक के साथ उठाना होगा।',
    'Also flagging — ORS stock has come up three times now, we need to raise it with the block.',
  ],

  // ----------------------------------------------------------- attendance
  'att.title': ['उपस्थिति दर्ज करें', 'Mark attendance'],
  'att.headerFallback': ['उपस्थिति', 'Attendance'],
  'att.privacyTitle': ['यह पुष्टि करता है कि आप आए — यह रिकॉर्डिंग नहीं है।', 'This confirms you showed up — it is not a recording.'],
  'att.privacyBody': [
    'आपकी फोटो केवल यह दर्शाती है कि आप उपस्थित हैं। यह आपकी AAM टीम के पास रहती है, आपके काम को देखने या आंकने के लिए कभी उपयोग नहीं होती, और आप इसे कभी भी छोड़ सकते हैं। ',
    'Your photo simply marks you present. It stays with your AAM team, is never used to watch or judge your work, and you can skip it any time. ',
  ],
  'att.privacyLink': ['आपका डेटा कैसे सुरक्षित रखा जाता है ›', 'How your data is kept safe ›'],
  'att.chooseTitle': ['आप उपस्थिति कैसे दर्ज करना चाहेंगे?', 'How would you like to mark attendance?'],
  'att.chooseBody': ['एक त्वरित समूह फोटो सबसे तेज़ है, लेकिन यह पूरी तरह वैकल्पिक है।', 'A quick group photo is the fastest, but it is completely optional.'],
  'att.groupPhoto': ['समूह फोटो लें', 'Take a group photo'],
  'att.groupPhotoSub': ['अनुशंसित · वैकल्पिक', 'Recommended · optional'],
  'att.manual': ['मैन्युअल रूप से उपस्थित दर्ज करें', 'Mark present manually'],
  'att.manualSub': ['फोटो की आवश्यकता नहीं', 'No photo needed'],
  'att.cameraPreview': ['समूह फोटो पूर्वावलोकन', 'Group photo preview'],
  'att.capturedWith': ['इसके साथ लिया गया', 'Captured with'],
  'att.timeLabel': ['समय · {time}', 'Time · {time}'],
  'att.place': ['स्थान', 'Place'],
  'att.switchManual': ['नहीं चाहते? मैन्युअल पर जाएं ›', 'Prefer not to? Switch to manual ›'],
  'att.presentToday': ['आज उपस्थित', 'Present today'],
  'att.whoSees': ['यह उपस्थिति कौन देख सकता है?', 'Who can see this attendance?'],
  'att.whoSeesTeam': ['<strong>आपकी AAM टीम</strong> — इस बैठक के ANM और ASHA।', '<strong>Your AAM team</strong> — the ANM and ASHAs in this meeting.'],
  'att.whoSeesYou': ['<strong>आप</strong> — कभी भी, अपनी प्रोफ़ाइल से।', '<strong>You</strong> — any time, from your profile.'],
  'att.whoSeesNote': [
    'इसे निगरानी के लिए ब्लॉक कार्यालय के साथ साझा नहीं किया जाता, और बैठक रिकॉर्ड की पुष्टि होने के बाद फोटो हटा दी जाती हैं।',
    'It is not shared with the block office to monitor you, and photos are removed after the meeting record is confirmed.',
  ],
  'att.save': ['उपस्थिति सहेजें ({n}/{m})', 'Save attendance ({n}/{m})'],
  'att.editLaterNote': ['यदि कोई देर से आता है तो आप इसे बाद में संपादित कर सकते हैं।', 'You can edit this later if someone arrives late.'],

  // ---------------------------------------------------------------- tasks
  'tasks.title': ['फॉलो-अप कार्य', 'Follow-up tasks'],
  'tasks.subtitle': ['आपकी AAM बैठकों से', 'From your AAM meetings'],
  'tasks.colTodo': ['करने योग्य', 'To-do'],
  'tasks.colDoing': ['प्रगति में', 'In progress'],
  'tasks.colDone': ['पूर्ण', 'Done'],
  'tasks.filterAll': ['सभी', 'All'],
  'tasks.filterTodo': ['करने योग्य', 'To-do'],
  'tasks.filterDoing': ['जारी', 'Doing'],
  'tasks.filterDone': ['पूर्ण', 'Done'],
  'tasks.empty': ['यहां कुछ नहीं है।', 'Nothing here.'],
  'tasks.start': ['शुरू करें →', 'Start →'],
  'tasks.markDone': ['पूर्ण चिह्नित करें ✓', 'Mark done ✓'],

  // ------------------------------------------------------- team performance
  'team.title': ['टीम प्रदर्शन', 'Team performance'],
  'team.subtitle': ['सेक्टर लीडरबोर्ड · सितंबर', 'Sector leaderboard · September'],
  'team.ofTotal': ['{total} सेक्टर टीमों में से', 'of {total} sector teams'],
  'team.targetStat': ['इस माह का लक्ष्य', "This month's target"],
  'team.targetTitle': ["इस माह का टीम लक्ष्य", "This month's team target"],
  'team.targetComplete': ['{pct}% पूर्ण', '{pct}% complete'],
  'team.targetAuto': ['पिछले माह से स्वतः सेट', 'Auto-set from last month'],
  'team.leaderboard': ['सेक्टर लीडरबोर्ड', 'Sector leaderboard'],
  'team.yours': ['आपकी टीम', 'Your team'],
  'team.recognitionTitle': ['टीम पहचान', 'Team recognition'],
  'team.badgeLogged': ['📋 हर बैठक दर्ज', '📋 Every meeting logged'],
  'team.badgeTurnout': ['🤝 पूरी टीम उपस्थित', '🤝 Full team turnout'],
  'team.badgeOnTime': ['⏱️ समय पर बैठकें', '⏱️ On-time meetings'],
  'team.recognitionNote': [
    'बैज टीम की मेहनत को दर्शाते हैं — पूरी सेक्टर टीम के साथ साझा किए जाते हैं, कभी भी किसी के खिलाफ उपयोग नहीं होते।',
    "Badges celebrate the team's effort — shared with the whole sector team, never used against anyone.",
  ],

  // -------------------------------------------------------------- profile
  'profile.title': ['मेरी प्रोफ़ाइल', 'My profile'],
  'profile.facility': ['सुविधा', 'Facility'],
  'profile.district': ['ज़िला', 'District'],
  'profile.mobile': ['मोबाइल', 'Mobile'],
  'profile.settings': ['सेटिंग्स', 'Settings'],
  'profile.privacyTitle': ['आपकी गोपनीयता', 'Your privacy'],
  'profile.privacySub': ['हम क्या दर्ज करते हैं, और क्या कभी नहीं करते', 'What we capture, and what we never do'],
  'profile.language': ['भाषा', 'Language'],
  'profile.languageSub': ['अपनी पसंदीदा भाषा चुनें', 'Choose your preferred language'],
  'profile.signOut': ['साइन आउट', 'Sign out'],
  'profile.footer': ['AAM Connect · पूर्वावलोकन संस्करण', 'AAM Connect · preview build'],

  // ---------------------------------------------------------- privacy center
  'privacy.title': ['आपकी गोपनीयता', 'Your privacy'],
  'privacy.subtitle': ['सरल उत्तर, कोई तकनीकी शब्द नहीं', 'Plain answers, no jargon'],
  'privacy.introTitle': ['यह ऐप आपके लिए एक उपकरण है, आप पर नज़र रखने के लिए नहीं।', 'This app is a tool for you, not a watch over you.'],
  'privacy.introBody': [
    'यह आपकी बैठकों को आसान बनाने और आपके काम को दृश्यमान बनाने के लिए है — कभी भी आप पर निगरानी रखने के लिए नहीं। यहां बताया गया है कि आपकी जानकारी को कैसे संभाला जाता है।',
    'It exists to make your meetings lighter and your work visible — never to monitor you. Here is exactly how your information is handled.',
  ],
  'privacy.pledgeTitle': ['स्वास्थ्य कार्यकर्ताओं के लिए हमारा वादा', 'Our pledge to health workers'],
  'privacy.pledge1': ['आपको हमेशा बताया जाता है कि क्या दर्ज किया जा रहा है, उससे पहले।', 'You are always told what is captured, before it happens.'],
  'privacy.pledge2': ['आप हमेशा मना कर सकते हैं और फिर भी अपना काम कर सकते हैं।', 'You can always say no and still do your work.'],
  'privacy.pledge3': ['आपका डेटा समन्वय के लिए है, कभी निगरानी के लिए नहीं।', 'Your data is for coordination, never for surveillance.'],
  'privacy.faq1q': ['क्या ऐप मुझे रिकॉर्ड कर रहा है?', 'Is the app recording me?'],
  'privacy.faq1a': [
    'नहीं। कोई ऑडियो या वीडियो रिकॉर्डिंग नहीं होती, और पृष्ठभूमि में कुछ नहीं चलता। फोटो तभी ली जाती है जब आप कैमरा टैप करके खुद चुनते हैं — और सहेजे जाने से पहले आप उसे हमेशा देख सकते हैं।',
    'No. There is no audio or video recording, and nothing runs in the background. A photo is only taken if you choose to, at the moment you tap the camera — and you always see it before it is saved.',
  ],
  'privacy.faq2q': ['यह फोटो, समय और स्थान क्यों मांगता है?', 'Why does it ask for a photo, time and place?'],
  'privacy.faq2a': [
    'केवल यह पुष्टि करने के लिए कि बैठक वास्तव में हुई, ताकि आपकी टीम को उस काम का श्रेय मिले। यह कागज़ी उपस्थिति पत्रक की जगह लेता है — इससे ज़्यादा कुछ नहीं।',
    'Only to confirm a meeting actually happened, so your team gets credit for the work. It replaces paper attendance sheets — nothing more.',
  ],
  'privacy.faq3q': ['क्या मैं फोटो के लिए मना कर सकता/सकती हूं?', 'Can I say no to the photo?'],
  'privacy.faq3a': [
    'हमेशा। आप एक टैप से मैन्युअल रूप से उपस्थिति दर्ज कर सकते हैं। फोटो कभी अनिवार्य नहीं है, और मैन्युअल चुनने से आपकी टीम के रिकॉर्ड पर कोई असर नहीं पड़ता।',
    "Always. You can mark attendance manually with a single tap. No photo is ever required, and choosing manual has no effect on your team's record.",
  ],
  'privacy.faq4q': ['मेरी उपस्थिति और फोटो कौन देख सकता है?', 'Who can see my attendance and photos?'],
  'privacy.faq4a': [
    'केवल आप और उस बैठक के AAM टीम सदस्य। इसे आप पर निगरानी रखने के लिए ब्लॉक कार्यालय को नहीं भेजा जाता।',
    'Only you and the AAM team members in that meeting. It is not sent to the block office to monitor you.',
  ],
  'privacy.faq5q': ['क्या मेरा स्थान पूरे दिन ट्रैक किया जाता है?', 'Is my location tracked through the day?'],
  'privacy.faq5a': [
    'नहीं। स्थान केवल एक बार पढ़ा जाता है, जब आप उपस्थिति दर्ज करते हैं, ताकि यह नोट हो सके कि बैठक कहां हुई। ऐप कभी आपकी गतिविधियों का पीछा नहीं करता।',
    'No. Location is read once, only when you mark attendance, to note where the meeting was held. The app never follows your movements.',
  ],
  'privacy.faq6q': ['मेरा डेटा कितने समय तक रखा जाता है?', 'How long is my data kept?'],
  'privacy.faq6a': [
    'बैठक रिकॉर्ड की पुष्टि होते ही उपस्थिति फोटो हटा दी जाती हैं। बैठक के नोट्स बने रहते हैं ताकि आपकी टीम के पास संदर्भ के लिए साझा इतिहास हो।',
    'Attendance photos are removed once the meeting record is confirmed. Meeting notes stay so your team has a shared history to refer back to.',
  ],

  // ------------------------------------------------------- schedule meeting
  'schedule.title': ['बैठक शेड्यूल करें', 'Schedule meeting'],
  'schedule.subtitle': ["आपकी टीम के पैटर्न से स्मार्ट-सुझाव", "Smart-suggested from your team's patterns"],
  'schedule.titleLabel': ['बैठक शीर्षक', 'Meeting title'],
  'schedule.timeLabel': ['सुझाया गया समय', 'Suggested time'],
  'schedule.slot1': ['आज · दोपहर 3:00 बजे', 'Today · 3:00 PM'],
  'schedule.slot2': ['कल · सुबह 11:00 बजे', 'Tomorrow · 11:00 AM'],
  'schedule.slot3': ['शुक्र · दोपहर 2:00 बजे', 'Fri · 2:00 PM'],
  'schedule.slotNote': [
    'आपकी ब्लॉक और सेक्टर बैठकों से बचने के लिए चुना गया, ताकि AAM का समय बना रहे।',
    'Chosen to avoid your Block & Sector meetings, so AAM keeps its slot.',
  ],
  'schedule.notifyLabel': ['कॉल और व्हाट्सएप से सूचित करें', 'Notify by call & WhatsApp'],
  'schedule.privacyBody': [
    'यहां आपके चुने गए लोगों को ही रिमाइंडर भेजे जाते हैं — आपकी पसंद के बिना किसी को नहीं जोड़ा या संदेश नहीं भेजा जाता।',
    'Reminders go out to the people you pick here — no one is added or messaged without you choosing them.',
  ],
  'schedule.submit': ['रिमाइंडर भेजें और शेड्यूल करें', 'Send reminders & schedule'],

  // ---------------------------------------------------------------- toast
  'toast.attendanceSaved': ['टीम के साथ उपस्थिति सहेजी गई।', 'Attendance saved with your team.'],
  'toast.meetingScheduled': ['बैठक शेड्यूल हुई · रिमाइंडर भेजे गए।', 'Meeting scheduled · reminders sent.'],

  // ----------------------------------------------------- demo / mock data
  'mock.person.ashok': ['अशोक कुमार', 'Ashok Kumar'],
  'mock.person.sunita': ['सुनीता देवी', 'Sunita Devi'],
  'mock.person.radha': ['राधा', 'Radha'],
  'mock.person.kavita': ['कविता', 'Kavita'],

  'mock.place.devali': ['देवली', 'Devali'],
  'mock.place.salumber': ['सलूंबर', 'Salumber'],
  'mock.place.kolyari': ['कोल्यारी', 'Kolyari'],
  'mock.place.jhallara': ['झल्लारा', 'Jhallara'],
  'mock.place.semari': ['सेमारी', 'Semari'],

  'mock.loc.devaliHall': ['देवली उप-केंद्र हॉल', 'Devali Sub-centre hall'],

  'mock.m1.title': ['AAM मासिक बैठक', 'AAM Monthly Sync'],
  'mock.m1.date': ['आज', 'Today'],
  'mock.m1.time': ['दोपहर 3:00 बजे', '3:00 PM'],
  'mock.a1': ["पिछले माह के फॉलो-अप", "Last month's follow-ups"],
  'mock.a2': ['टीकाकरण अभियान समीक्षा', 'Immunisation drive review'],
  'mock.a3': ['NCD स्क्रीनिंग लक्ष्य', 'NCD screening targets'],
  'mock.a4': ['रेफरल मामलों का अपडेट', 'Referral case updates'],
  'mock.a5': ['बार-बार ORS स्टॉक खत्म होना (3 बार उल्लेख)', 'Recurring ORS stock-out (3 mentions)'],

  'mock.m2.title': ['टीकाकरण कैच-अप समीक्षा', 'Immunisation catch-up review'],
  'mock.m2.date': ['शुक्र, 15 सितं', 'Fri, 15 Sep'],
  'mock.m2.time': ['दोपहर 2:00 बजे', '2:00 PM'],
  'mock.b1': ['ज़ीरो-डोज़ बच्चों की सूची', 'Zero-dose children list'],
  'mock.b2': ['कोल्ड-चेन तैयारी', 'Cold-chain readiness'],

  'mock.m3.title': ['NCD स्क्रीनिंग योजना', 'NCD screening planning'],
  'mock.m3.date': ['सोम, 18 सितं', 'Mon, 18 Sep'],
  'mock.m3.time': ['सुबह 11:00 बजे', '11:00 AM'],
  'mock.c1': ['30+ जनसंख्या सर्वेक्षण योजना', '30+ population survey plan'],
  'mock.c2': ['BP/शुगर कैंप शेड्यूलिंग', 'BP/sugar camp scheduling'],

  'mock.t1': ['ORS किट फिर से भरें', 'Restock ORS kits'],
  'mock.t2': ['गांव स्वास्थ्य रजिस्टर अपडेट करें', 'Update village health register'],
  'mock.t3': ['NCD सर्वेक्षण — 12 घर', 'NCD survey — 12 households'],
  'mock.t4': ['2 रेफरल मामलों पर फॉलो-अप करें', 'Follow up on 2 referral cases'],
  'mock.t5': ['कोल्ड-चेन तापमान जांच', 'Cold-chain temperature check'],
} as const satisfies Record<string, readonly [string, string]>

export type MsgKey = keyof typeof M
