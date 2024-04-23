document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById("submit");
  console.log(submit);
  submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const parentName = document.getElementById("parent_name").value;
    const phoneNumber = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;
    const level = document.getElementById("level").value;
    const location = document.getElementById("location").value;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    // Kiểm tra giá trị của các ô input
    if (!parentName || !phoneNumber || !email || !level || !location) {
      Swal.fire({
        icon: "error",
        text: "Vui lòng nhập tất cả các ô ",
      });
      return;
    }
    if (level == "disabled" || location == "disabled") {
      console.log("hi");
      Swal.fire({
        icon: "error",
        text: "Vui lòng nhập tất cả các ô ",
      });
      return;
    }
    if (level == "disabled" && location == "disabled") {
      console.log("hi");
      Swal.fire({
        icon: "error",
        text: "Vui lòng nhập tất cả các ô ",
      });
      return;
    }
    if (!regexPhoneNumber.exec(phoneNumber)) {
      Swal.fire({
        icon: "error",
        text: "Vui lòng nhập đúng ô số điện thoại",
      });
      return;
    }
    const data = {
      parent_name: parentName,
      phone_number: phoneNumber,
      email: email,
      level: level,
      location: location,
    };

    Swal.fire({
      title: "Bạn có chắc thông tin trên là của chính xác chứ",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      denyButtonText: `Hủy`,
    }).then((result) => {
      if (result.isConfirmed) {
        //
        postGoogleForm(data);

        //z
        Swal.fire("Đăng kí thành công", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  });

  async function postGoogleForm(data) {
    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_oX00rpvaMU7AHxK9g1u44GAZ1EM5zN44LSAzXVN1Dw1I9w/formResponse";

    const formData = new FormData();
    formData.append("entry.660071833", data.parent_name);
    formData.append("entry.47933819", data.phone_number);
    formData.append("entry.232471565", data.email);
    formData.append("entry.1198182498", data.level);
    formData.append("entry.1688323255", data.location);
    const response = await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  }
});
