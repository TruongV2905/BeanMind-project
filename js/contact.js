document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById("contact-submit");
  submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;
    const email = document.getElementById("contact-email").value;
    const title = document.getElementById("contact-title").value;
    const mess = document.getElementById("contact-mess").value;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!name || !phone || !email || !title || !mess) {
      Swal.fire({
        icon: "error",
        text: "Vui lòng nhập tất cả các ô ",
      });
      return;
    }
    if (!regexPhoneNumber.exec(phone)) {
      Swal.fire({
        icon: "error",
        text: "Vui lòng nhập đúng ô số điện thoại",
      });
      return;
    }
    // Kiểm tra giá trị của các ô input

    const data = {
      fullName: name,
      phoneNumber: phone,
      email: email,
      title: title,
      mess: mess,
    };

    Swal.fire({
      title: "Are you sure that information is correct?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        //
        postGoogleForm(data);

        //z
        Swal.fire("Register Successfully", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  });

  async function postGoogleForm(data) {
    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScKAiSS0UHk33qSJBbkU5MJEU2ok2Xgujppn3iw34RI7JpC-Q/formResponse";

    const formData = new FormData();
    formData.append("entry.463755992", data.fullName);
    formData.append("entry.1912879495", data.phoneNumber);
    formData.append("entry.371840154", data.email);
    formData.append("entry.40160007", data.title);
    formData.append("entry.83834734", data.mess);
    const response = await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  }
});
