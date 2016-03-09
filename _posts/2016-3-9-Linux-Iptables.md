---
layout: post
title: "基于jekyll的第一篇文章1"
date: 2016-1-19
categories: mypost
---

##基础详情:
1.启动指令:service iptables start
2.重启指令:service iptables restart
3.关闭指令:service iptables stop
4.配置文件地址：/etc/sysconfig/iptables
>>需注意:修改/etc/sysconfig/iptables 后先service iptables restart，然后才调用/etc/rc.d/init.d/iptables save，