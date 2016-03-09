---
layout: post
title: "基于jekyll的第一篇文章1"
date: 2016-3-9
excerpt: Laravel 提供了很多默认事件，登录登出、数据库连接与查询、应用启动前后、缓存等等很多默认事件，本篇以用户登录事件来演示如何处理 Larvel 5 的默认事件。

categories: mypost
---
Laravel 提供了很多默认事件，登录登出、数据库连接与查询、应用启动前后、缓存等等很多默认事件，本篇以用户登录事件来演示如何处理 Larvel 5 的默认事件。

我们的目的：**处理用户登录事件，在用户登录的时候给用户添加最后登录时间(`last_login_at`)，以及最后登录的IP(`last_ip`)**

用户的登录事件在 Laravel 5 里的事件名称是 `auth.login`

### 基础详情:

1.启动指令:service iptables start
2.重启指令:service iptables restart
3.关闭指令:service iptables stop
4.配置文件地址：/etc/sysconfig/iptables
>>需注意:修改/etc/sysconfig/iptables 后先service iptables restart，然后才调用/etc/rc.d/init.d/iptables save，