


> 题目要求：
> 使用NodeWebkit模拟浏览器，可以获取Dom节点的xpath或css path。

 > 1. 可以输入URL地址，加载页面
 - 输入 url 时 必须添加协议头，否则提示 "url is error"!
			http://  + 地址 
				例如 :http://www.baidu.com
			file:///  + 地址
				例如 : file:///D:\PROJECT\app
 > 2. 鼠标悬停在页面dom上时，修改当前悬停的dom背景色
 - 在一些网页上存在图片可能更改dom的背景色显示不出来效果但是可以右键还是可以获取到Xpath和Css path
 > 3. 在悬停的dom上点击右键，弹出菜单项 复制XPath 复制CSS Path
 - 一些dom节点没有没有此功能，例如 meta元素，script元素，link元素
 - 一些dom节点添加了此功能在网页上不易选取，例如 html元素，title元素
 > 4. 点击相应菜单项，将XPath或CSS Path复制到剪贴板
 - 复制成功提示"Has been copied to clipboard!"
 - 复制失败提示"Replication fails"

>**本程序使用sublime text 和 web storm编写**
>**开发环境：**
> 操作系统：windows 8.1 update
> NodeWebkit版本：v0.12.0-alpha2-win-x64
> 通过 copy /b nw.exe+lesson1.zip app.exe生成可执行程序app.exe
> 因邮件大小限制打包文件里只有源代码和说明文档，如需执行软件可去github下载
> 本程序版本为 v0.1，日后还会持续维护，我已托管至github
 - https://github.com/limbo-git/SelectDomXpathandCsspath.git

 