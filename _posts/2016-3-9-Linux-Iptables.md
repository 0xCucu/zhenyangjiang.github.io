---
layout: post
title: "Linux的Iptables操作
excerpt:linux iptables 是与最新的3.5版本Linux内核集成的IP信息包过滤系统。
categories: mypost
---

##基础详情:
1.启动指令:service iptables start
2.重启指令:service iptables restart
3.关闭指令:service iptables stop
4.配置文件地址：/etc/sysconfig/iptables
>>需注意:修改/etc/sysconfig/iptables 后先service iptables restart，然后才调用/etc/rc.d/init.d/iptables save，