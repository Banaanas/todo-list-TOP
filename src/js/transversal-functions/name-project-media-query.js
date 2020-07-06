// This function had to be set up because when toggleSideNav function is used,
// the Names Project Display = None did not work when min-width < 800px
const nameProjectMediaQuery = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 800) {
      const projectNameSpan = document.querySelectorAll(".project-name-span");
      projectNameSpan.forEach((item, index) => {
        projectNameSpan[index].style.display = "none";
      });
    } else if (window.innerWidth >= 800) {
      const projectNameSpan = document.querySelectorAll(".project-name-span");
      projectNameSpan.forEach((item, index) => {
        projectNameSpan[index].style.display = "block";
      });
    }
  });
};

export default nameProjectMediaQuery;
