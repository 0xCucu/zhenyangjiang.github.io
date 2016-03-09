---
layout: post
title: "Linux Iptables 入门"
date: 2016-3-9
excerpt: iptables 是与最新的 3.5 版本 Linux 内核集成的 IP 信息包过滤系统。如果 Linux 系统连接到因特网或 LAN、服务器或连接 LAN 和因特网的代理服务器， 则该系统有利于在 Linux 系统上更好地控制 IP 信息包过滤和防火墙配置。

categories: mypost
---

### 基础详情:

- 启动指令:service iptables start
- 重启指令:service iptables restart
- 关闭指令:service iptables stop
- 配置文件地址：/etc/sysconfig/iptables
>>需注意:修改/etc/sysconfig/iptables 后先service iptables restart，然后才调用/etc/rc.d/init.d/iptables save，