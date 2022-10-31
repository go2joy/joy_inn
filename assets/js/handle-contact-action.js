/** User must add library to head bot-info to check bot */
//  <script async src="../assets/js/bot-info.js"></script>

if (!botInfo?.detectBot()?.isBot) {
  // TODO: Handle js with not bot

  // Must import 2 library to layout:
  // <script src="https://www.google.com/recaptcha/api.js?render=6LfRcXggAAAAANfDFk9ppYmcVo4ztrc_Iyw5UR6Q"></script>
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>

  axios.defaults.headers = {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
  };
  const validatePhoneNumber = (phone) => {
    const tmpPhoneVN = /(\+84|0)(3|5|7|8|9|1[2689])([0-9]{8})\b/;
    return tmpPhoneVN.test(phone);
  };
  const validateFormContact = () => {
    //Validate Name
    const name = document.getElementById("contact-name");
    if (!name.value.trim()) {
      name.value = "";
      return {
        status: false,
        message: "Hãy nhập họ và tên của bạn!",
      };
    }

    //Validate Phone
    const sdt = document.getElementById("contact-sdt");
    sdt.value = sdt.value.trim();
    if (!validatePhoneNumber(sdt.value)) {
      return {
        status: false,
        message: "Hãy nhập đúng số điện thoại!",
      };
    }

    return {
      status: true,
      message: "Success!",
    };
  };
  function onSubmitContact(e) {
    // e?.preventDefault();
    const validateForm = validateFormContact();
    if (!validateForm.status) {
      alert(validateForm.message);
      return false;
    }
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
    const contactSelect = document.getElementById("contact-select");
    const contact = contactSelect.options[contactSelect.selectedIndex].text;
    const areasSelect = document.getElementById("areas-select");
    const areas = areasSelect.options[areasSelect.selectedIndex].text;

    const note = document.getElementById("contact-note").value;
    const dataform = `<p style="font-size:20px;font-weight: 600;">Joy Inn Hotel vừa nhận được yêu cầu hợp tác với thông tin như sau: </p> <br>
        <p style="font-size:18px;font-weight: 500;">1. Họ tên: ${name}</p>
        <p style="font-size:18px;font-weight: 500;">2. Số điện thoại:: ${sdt}</p>
        <p style="font-size:18px;font-weight: 500;">3. Email: ${email}</p>
        <p style="font-size:18px;font-weight: 500;">4. Nhu cầu hợp tác: ${contact}</p>
        <p style="font-size:18px;font-weight: 500;">4. Khu vực: ${areas}</p>
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
        devGet.innerHTML += `<p style="float: left;font-size: 20px; color:#fff;text-align: left;">Gửi thông
                tin thành
                công! Joy Inn Hotel sẽ sớm liên hệ với bạn.</p>`;
        return response.data.data;
      });
  }
}
