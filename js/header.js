document.addEventListener("DOMContentLoaded", function () {
  loadHeaderAndSetup();
  loadFooter();
});

function loadHeaderAndSetup() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerPlaceholder.innerHTML = xhr.responseText;
      const header = document.getElementById("header");
      if (header) {
        const nav = document.getElementById("listNav");
        const btnExit = document.getElementById("btn-exit");
        const btnBar = document.getElementById("btn-bars");
        const btnSearch = document.getElementById("btn-search");
        const btnPhone = document.getElementById("btn-phone");
        btnBar.addEventListener("click", openNav);
        btnExit.addEventListener("click", closeNav);
        window.addEventListener("scroll", function () {
          let scrollPosition = 100;
          if (
            window.scrollY > scrollPosition ||
            document.documentElement.scrollTop > scrollPosition
          ) {
            header.style.background = "var(--background_1)";
            header.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
          } else {
            header.style.background = "transparent";
            header.style.boxShadow = "none";
          }
        });
      }
    }
  };
  xhr.send();
}

function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "footer.html", false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      footerPlaceholder.innerHTML = xhr.responseText;
      let submit = document.getElementById("submit");
      submit.addEventListener("click", async (e) => {
        e.preventDefault();
        const parentName = document.getElementById("parent_name").value;
        const phoneNumber = document.getElementById("phone_number").value;
        const email = document.getElementById("email").value;
        const level = document.getElementById("level").value;
        const location = document.getElementById("location").value;

        // Kiểm tra giá trị của các ô input
        if (!parentName || !phoneNumber || !email || !level || !location) {
          Swal.fire({
            icon: "error",
            text: "Vui lòng nhập tất cả các ô ",
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
          title: "Bạn có chắc thông tin trên là chính xác chứ ?",
          showDenyButton: true,
          // showCancelButton: true,
          confirmButtonText: "Xác nhận",
          denyButtonText: `Hủy`,
        }).then((result) => {
          if (result.isConfirmed) {
            postGoogleForm(data);
            Swal.fire("Đăng kí thành công", "", "success");
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
    }
  };
  xhr.send();
}

function openNav() {
  const nav = document.getElementById("listNav");
  const btnBar = document.getElementById("btn-bars");
  const btnExit = document.getElementById("btn-exit");
  const btnSearch = document.getElementById("btn-search");
  const btnPhone = document.getElementById("btn-phone");

  nav.style.height = "100vh";
  btnBar.style.display = "none";
  btnExit.style.display = "block";
  btnSearch.style.opacity = "0";
  btnPhone.style.opacity = "0";
}

function closeNav() {
  const nav = document.getElementById("listNav");
  const btnBar = document.getElementById("btn-bars");
  const btnExit = document.getElementById("btn-exit");
  const btnSearch = document.getElementById("btn-search");
  const btnPhone = document.getElementById("btn-phone");

  nav.style.height = "0";
  btnExit.style.display = "none";
  btnBar.style.display = "block";
  btnSearch.style.opacity = "1";
  btnPhone.style.opacity = "1";
}
document.addEventListener("DOMContentLoaded", function () {
  var phoneIcon = document.getElementById("fa-solid");
  phoneIcon.addEventListener("click", function () {
    window.location.href = "tel:+0968070478";
  });
});
