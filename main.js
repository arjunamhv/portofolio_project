$("#about").mouseenter(function () {
  $("#animate-img").css({
    opacity: "1",
    animation: "leftRightIn 1s ease-out 1",
  });
});
$("#about").mouseenter(function () {
  $("#animate-text").css({
    opacity: "1",
    animation: "rightLeftIn 1s ease-out 1",
  });
});
$("#about").mouseenter(function () {
  $("#titleAbout").css({
    opacity: "1",
    animation: "downUp 1s ease-out 1",
  });
});
$("#work").mouseenter(function () {
  $("#titleWork").css({
    opacity: "1",
    animation: "downUp 1s ease-out 1",
  });
});
$("#contact").mouseenter(function () {
  $("#titleContact").css({
    opacity: "1",
    animation: "downUp 1s ease-out 1",
  });
});
$("#work").mouseenter(function () {
  $(".flip-card-inner").css({
    transform: "rotateY(180deg)",
  });
});

function Detail(event, thisElement) {
  const target = $(event.target);

  const item = target.parents(".about-exp-item");
  const detail = item.children(".about-exp-item-detail");

  detail.css({
    display: "inline",
  });

  $(
    "<a class='readmore' onclick='hideDetail(event, this)'>Hide</a>"
  ).insertAfter(detail);
  $(thisElement).css({
    display: "none",
  });
}

function hideDetail(event, thisElement) {
  const target = $(event.target);

  const item = target.parents(".about-exp-item");
  const detail = item.children(".about-exp-item-detail");
  const readmore = item.children("#readmore");

  detail.css({
    display: "none",
  });
  readmore.css({
    display: "inline",
  });
  $(thisElement).css({
    display: "none",
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  const nama = $("#nameInput");
  const email = $("#emailInput");
  const subject = $("#subjectInput");
  const message = $("#messageInput");

  if ($(nama).val() == "") {
    alert("Nama tidak boleh kosong");
    return;
  } else if ($(email).val() == "") {
    alert("Email tidak boleh kosong");
    return;
  } else if ($(subject).val() == "") {
    alert("Subject tidak boleh kosong");
    return;
  } else if ($(message).val() == "") {
    alert("Message tidak boleh kosong");
    return;
  } else {
    alert("Terima kasih telah menghubungi saya");
    $(nama).val("");
    $(email).val("");
    $(subject).val("");
    $(message).val("");
  }
}
