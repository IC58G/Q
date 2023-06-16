/******************************************
 * @name 哔哩哔哩
 * @desc 哔哩哔哩解锁高码率
 * @statement 自用脚本 仅供学习交流，禁止用于商业用途
 * @author ic58G
 * @create 20230101
 * @version 1.0.0
******************************************

[mitm]
hostname = app.bilibili.com

[rewrite_local]
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/IC58G/Q/master/Resource/Script/a/blbl.js

******************************************/
let body = JSON.parse($response.body);

!body.data.vip.status && (body.data.vip.type = 2, body.data.vip.status = 1, body.data.vip.vip_pay_type = 1, body.data.vip.due_date = 4070880061000);

$done({ body: JSON.stringify(body) });
