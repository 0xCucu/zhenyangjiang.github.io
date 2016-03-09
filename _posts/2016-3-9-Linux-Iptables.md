---
layout: post
title: "Linux Iptables 入门"
date: 2016-3-9
excerpt: iptables 是与最新的 3.5 版本 Linux 内核集成的 IP 信息包过滤系统。如果 Linux 系统连接到因特网或 LAN、服务器或连接 LAN 和因特网的代理服务器， 则该系统有利于在 Linux 系统上更好地控制 IP 信息包过滤和防火墙配置。

categories: mypost
---

# 基础详情:

- 启动指令:service iptables start
- 重启指令:service iptables restart
- 关闭指令:service iptables stop
- 配置文件地址：/etc/sysconfig/iptables

> 需注意:修改/etc/sysconfig/iptables 后先service iptables restart，然后才调用/etc/rc.d/init.d/iptables save，

---

# 命令:

    `ptables [ -t 表名] [命令选项] [链名] [条件匹配] [目标动作或跳转]`

### 表名：Filter, NAT, Mangle, Raw起包过滤功能的为表Filter，可以不填，不填默认为Filter

---
### 命令选项：
- -A 在指定链的末尾添加（--append）一条新的规则
- -D	删除（--delete）指定链中的某一条规则，按规则序号或内容确定要删除的规则
- -I	在指定链中插入（--insert）一条新的规则，默认在链的开头插入
- -R	修改、替换（--replace）指定链中的一条规则，按规则序号或内容确定
- -L	列出（--list）指定链中的所有的规则进行查看，默认列出表中所有链的内容
- -F	清空（--flush）指定链中的所有规则，默认清空表中所有链的内容
- -N	新建（--new-chain）一条用户自己定义的规则链
- -X	删除指定表中用户自定义的规则链（--delete-chain）
- -P	设置指定链的默认策略（--policy）
- -n	用数字形式（--numeric）显示输出结果，若显示主机的 IP地址而不是主机名
- -P	设置指定链的默认策略（--policy）
- -v	查看规则列表时显示详细（--verbose）的信息
- -V	查看iptables命令工具的版本（--Version）信息
- -h	查看命令帮助信息（--help）
- --line-number	查看规则列表时，同时显示规则在链中的顺序号

---
### 链名：
- INPUT链 – 处理来自外部的数据(入站)。
- OUTPUT链 – 处理向外发送的数据（出站）。
- FORWARD链 – 将数据转发到本机的其他网卡设备上。

---
### 条件匹配:
- --dport：指定目标端口
- --sport：指定源端口
- -j：指定动作类型
- -p    指定规则协议，如tcp, udp,icmp等，可以使用all来指定所有协议
- -s	指定数据包的源地址参数，可以使IP地址、网络地址、主机名
- -d	指定目的地址
- -i	输入接口
- -o	输出接口
- syn   第一次握手

---
### 目标动作或跳转:
- ACCEPT：允许数据包通过。
- DROP：直接丢弃数据包，不给出任何回应信息。
- REJECT：拒绝数据包通过，必须时会给数据发送端一个响应信息。
- LOG：在/var/log/messages 文件中记录日志信息，然后将数据包传递给下一条规则。
- QUEUE：防火墙将数据包移交到用户空间
- RETURN：防火墙停止执行当前链中的后续Rules，并返回到调用链(the calling chain)

---
# 常见命令：
- 删除iptables现有规则

    `iptables –F `
- 查看iptables规则

    `iptables –L（iptables –L –v -n）`

- 增加一条规则到最后`

    `iptables -A INPUT -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT `

- 限制ping 192.168.146.3主机的数据包数，平均2/s个，最多不能超过3个

    `iptables -A INPUT -i eth0 -d 192.168.146.3 -p icmp --icmp-type 8 -m limit --limit 2/second --limit-burst 3 -j ACCEPT
`
- 开启port 22 用于ssh

    `iptables -A INPUT -p tcp --dport 22 -j ACCEPT
- 配置默认链策略

    `iptables -P INPUT DROP `

    `iptables -P FORWARD DROP `

    `iptables -P OUTPUT DROP `
- 防止单个ip访问量过大

    `iptables -I INPUT -p tcp --dport 80 -m connlimit --connlimit-above 30 -j DROP
`
