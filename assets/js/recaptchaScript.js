/** User must add library to head bot-info to check bot */
//  <script async src="../assets/js/bot-info.js"></script>

if (!botInfo?.detectBot()?.isBot) {
  // TODO: Handle js with not bot
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=6LfRcXggAAAAANfDFk9ppYmcVo4ztrc_Iyw5UR6Q`;
  // script.async = true;

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}
