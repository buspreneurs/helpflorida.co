(function() {
$B.setCustomization("pageKeybinding", !0), window.resizePages = function() {
var t, e;
return t = $(window).height(), e = 640 > t ? 640 :t, $('.wide:not(".no-resize")').each(function() {
var t, n, i;
return i = $(this), t = i.find(".container").first(), i.css({
"padding-top":0,
"padding-bottom":0
}), n = t.outerHeight(!1), e > n ? i.css({
"padding-top":Math.floor(.5 * (e - n)),
"padding-bottom":Math.ceil(.5 * (e - n))
}) :void 0;
}), $(".wide.no-resize").css({
"padding-top":0,
"padding-bottom":0
}), Bobcat.TH.isMobile() ? $("ul.slides").addClass("scroll-bg") :void 0;
}, window.runAfterDomBinding.add("pitch", function() {
return Bobcat.TH.applyTouchNav(), resizePages(), $(window).resize(resizePages), 
$(".wide img").load(resizePages), window.edit_page.isShowPage || window.edit_page.Event.subscribe("Slide.afterAdd", function() {
return resizePages();
}), $(".email-form-pitch").each(function() {
return $(this).find(".input").each(function() {
var t, e, n;
return n = $(this).find("label"), "none" !== n.css("display") ? (e = $(this).find("input, textarea"), 
t = function() {
return "" === e.val() ? n.show() :n.hide();
}, e.keypress(function() {
return "" === e.val() ? n.hide() :void 0;
}), e.keyup(t), e.blur(t)) :void 0;
});
}), $B.TH.enableParallax($(".wide.image"), !0), $B.TH.enableAnimationForBlocks();
});
}).call(this);