function hire_me() {
  document.getElementsByTagName("aside")[0].style.display:none;
  alert("Your interest in hiring me is truly appreciated!, I will reach you back soon to discuss how I can contribute to your team's success. Hit OK to share your recruitment information and start our journey together.");
}
function coffee1() {
  alert("Hooray! Your detail is in. Now, before you go, Don't forget to grab a coffee for me—it's my secret coding fuel!");

}
document.addEventListener("DOMContentLoaded", function () {
  const BOUNDS = 50;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      document.addEventListener("pointermove", ({ x, y }) => {
        const newX = gsap.utils.mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, x);
        const newY = gsap.utils.mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, y);
        gsap.set(document.documentElement, {
          "--rotate-x": newY,
          "--rotate-y": newX
        });
      });
    } else if (i === 1) {
      let isChecked; // Declare the variable without initializing
      document.addEventListener("pointerdown", (e) => {
        isChecked = !isChecked;
        document.documentElement.style.setProperty("--dark", isChecked ? 1 : 0);
      });
    }
  }

  // const form1 = document.querySelector("form");

  // // Getting the details from forms
  // const FullName = document.getElementById("recruiter_logname");
  // const phoneNumber = document.getElementById("recruiter_telephone");
  // const projectBudget = document.getElementById("budget");
  // const emailInput = document.getElementById("recruiter_logemail");
  // const messageSubject = document.getElementById("subject");
  // const Mess = document.getElementById("recruiter_textarea");
  // const friendUsername = document.getElementById("friend_logname");
  // const friendsMessage = document.getElementById("friend_textarea");

  // function sendEmail() {
  //   const bodyMessage = `
  //     Full Name: ${FullName.value}<br/>
  //     Phone Number: ${phoneNumber.value}<br/>
  //     Project Budget: ${projectBudget.value}<br/>
  //     Email: ${emailInput.value}<br/>
  //     Message Subject: ${messageSubject.value}<br/>
  //     Message: ${Mess.value}<br/>
  //     Friend Username: ${friendUsername.value}<br/>
  //     Friend's Message: ${friendsMessage.value}
  //   `;

  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "locozoombady@gmail.com",
  //     Password: "CF046471BB200F8E23F21B9C19821EA7FF77",
  //     To: "locozoombady@gmail.com",
  //     From: "locozoombady@gmail.com",
  //     Subject: messageSubject.value,
  //     Body: bodyMessage,
  //   }).then((message) => {
  //     if (message === "OK") {
  //       Swal.fire({
  //         title: "SUCCESS!",
  //         text: "Your message sent to collins successfully!",
  //         icon: "success",
  //       });
  //     }
  //   });
  // }

  // form1.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   sendEmail();
  // });

  function coffee() {
    alert("Your support means the world! By buying me a coffee, you're helping fuel late-night coding sessions. Click OK to treat me to a virtual coffee and support my work!");
  }
});
