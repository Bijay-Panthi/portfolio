//   <script>
//   $(document).ready(function() {
//   $("nav li a").click(function() {
//     if (
//       location.pathname.replace(/^\//, "") ==
//         this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       var $target = $(this.hash);
//       $target =
//         ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
//       if ($target.length) {
//         var targetOffset = $target.offset().top;
//         $("html,body").animate({ scrollTop: targetOffset }, 3000);
//         return false;
//       }
//     }
//   });
//   $("nav li").on("click", function() {
//     e.preventDefault();
//     $("nav li").removeClass("active");
//     $(this).addClass("active");
//   });
// });
// </script>
