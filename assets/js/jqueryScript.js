/** User must add library to head bot-info to check bot */
//  <script async src="../assets/js/bot-info.js"></script>

if (!botInfo?.detectBot()?.isBot) {
  // TODO: Handle js with not bot
  const script = document.createElement("script");
  script.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js`;
  // script.async = true;

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}
