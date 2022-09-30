// Must import 2 library to layout:
// <script src="https://www.google.com/recaptcha/api.js?render=6LfRcXggAAAAANfDFk9ppYmcVo4ztrc_Iyw5UR6Q"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>

axios.defaults.headers = {
  "Content-Type": "application/json",
  "cache-control": "no-cache",
};

function onClickReCapcha(e) {
  // e?.preventDefault();
  // postAPISendMail(token);
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfRcXggAAAAANfDFk9ppYmcVo4ztrc_Iyw5UR6Q")
      .then(function (token) {
        postAPISendMail(token);
      });
  });
}
async function postAPISendMail(token) {
  const name = document.getElementById("contact-name").value;
  const sdt = document.getElementById("contact-sdt").value;
  const email = document.getElementById("contact-email").value;
  let sel = document.getElementById("contact-select");
  const select = sel.options[sel.selectedIndex].text;
  const note = document.getElementById("contact-note").value;
  const dataform = `<p style="font-size:20px;font-weight: 600;">Joy Inn Hotel vừa nhận được yêu cầu hợp tác với thông tin như sau: </p> <br>
        <p style="font-size:18px;font-weight: 500;">1. Họ tên: ${name}</p>
        <p style="font-size:18px;font-weight: 500;">2. Số điện thoại:: ${sdt}</p>
        <p style="font-size:18px;font-weight: 500;">3. Email: ${email}</p>
        <p style="font-size:18px;font-weight: 500;">4. Nhu cầu hợp tác: ${select}</p>
        <p style="font-size:18px;font-weight: 500;">5. Ghi chú: ${note}</p>
        <p style="font-size:18px;font-weight: 600;">Trân trọng/.</p>
        <p style="font-size:18px;font-weight: 600;">Email từ Website Joy Inn Hotel/.</p>`;
  const params = {
    token: token,
    subject: "[Website - Franchise] - Bạn vừa nhận được yêu cầu hợp tác mới",
    toEmailList: "support@joyinn.vn",
    ccEmailList: "",
    content: dataform,
  };
  const result = await axios
    .post(
      "https://staging-api.go2joy.vn/api/v5/web-booking/other/sendEmailForJoyInn",
      params
    )
    .then(function (response) {
      const devGet = document.getElementById("message_success");
      devGet.innerHTML += `<p style="float: left;font-size: 20px; color:#409eff;text-align: left;">Gửi thông
                tin thành
                công! Joy Inn Hotel sẽ sớm liên hệ với bạn.</p>`;
      return response.data.data;
    });
}

function onClickReCapchaMobile(e) {
  // e?.preventDefault();
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfRcXggAAAAANfDFk9ppYmcVo4ztrc_Iyw5UR6Q")
      .then(function (token) {
        postAPISendMailMobile(token);
      });
  });
}
async function postAPISendMailMobile(token) {
  const name = document.getElementById("contact-name-mobile").value;
  const sdt = document.getElementById("contact-sdt-mobile").value;
  const email = document.getElementById("contact-email-mobile").value;
  let sel = document.getElementById("contact-select-mobile");
  const select = sel.options[sel.selectedIndex].text;
  const note = document.getElementById("contact-note-mobile").value;
  const dataform = `<p style="font-size:20px;font-weight: 600;">Joy Inn Hotel vừa nhận được yêu cầu hợp tác với thông tin như sau: </p> <br>
        <p style="font-size:18px;font-weight: 500;">1. Họ tên: ${name}</p>
        <p style="font-size:18px;font-weight: 500;">2. Số điện thoại:: ${sdt}</p>
        <p style="font-size:18px;font-weight: 500;">3. Email: ${email}</p>
        <p style="font-size:18px;font-weight: 500;">4. Nhu cầu hợp tác: ${select}</p>
        <p style="font-size:18px;font-weight: 500;">5. Ghi chú: ${note}</p>
        <p style="font-size:20px;font-weight: 600;">Trân trọng/.</p>
        <p style="font-size:20px;font-weight: 600;">Email từ Website Joy Inn Hotel/.</p>`;
  const params = {
    token: token,
    subject: "[Website - Franchise] - Bạn vừa nhận được yêu cầu hợp tác mới",
    toEmailList: "support@joyinn.vn",
    ccEmailList: "",
    content: dataform,
  };
  const result = await axios
    .post(
      "https://staging-api.go2joy.vn/api/v5/web-booking/other/sendEmailForJoyInn",
      params
    )
    .then(function (response) {
      const devGet = document.getElementById("message_success-mobile");
      devGet.innerHTML += `<p style="float: left;font-size: 20px; color:#409eff;text-align: left;">Gửi thông
                tin thành
                công! Joy Inn Hotel sẽ sớm liên hệ với bạn.</p>`;
      const getSendmail = document.getElementById("stickyEmailMobile");
      getSendmail.style.paddingBottom = "105px";
      return response.data.data;
    });
}
