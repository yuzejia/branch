document.writeln("<!--低版本浏览器升级提示-->");
document.writeln("<div class=\'m-browsehappy\'>");
document.writeln("    <div class=\'browsehappy-inner\'>");
document.writeln("        <p class=\'titletip\'>对不起！<br/>您的浏览器版本过低，为了更好的体验，建议您升级或更换浏览器浏览。</p>");
document.writeln("        <p class=\'suggest\'>建议使用：</p>");
document.writeln("        <p class=\'brower\'>");
document.writeln("            <span class=\'item\'>");
document.writeln("                <a class=\'chrome image\' href=\'http://www.google.cn/intl/zh-CN/chrome/browser/?spm=1.7274553.0.0.benzR1\' target=\'_blank\' title=\'下载Chrome浏览器\'></a>");
document.writeln("                <b class=\'text\'>chrome</b>");
document.writeln("            </span>");
document.writeln("            <span class=\'item\'>");
document.writeln("                <a class=\'firefox image\' href=\'http://www.firefox.com.cn/download/\' target=\'_blank\' title=\'下载Firefox浏览器\'></a>");
document.writeln("                <b class=\'text\'>firefox</b>");
document.writeln("            </span>");
document.writeln("            <span class=\'item\'>");
document.writeln("                <a class=\'ie image\' href=\'https://www.microsoft.com/en-us/download/internet-explorer.aspx\' target=\'_blank\' title=\'下载Internet Explorer浏览器\'></a>");
document.writeln("                <b class=\'text\'>ie8+</b>");
document.writeln("            </span>");
document.writeln("        </p>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("<script>");
document.writeln("    window.nonsupportIE = true;");
document.writeln("</script>");