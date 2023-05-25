Create `webhookd.service` in `/etc/systemd/system`:

```text
[Unit]
Description=Webhook server
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=root
WorkingDirectory=/root/apps/astro-directus-example
ExecStart=/root/apps/astro-directus-example/bin/webhookd -scripts /root/apps/astro-directus-example/scripts -hook-timeout 1000

[Install]
WantedBy=multi-user.target
```
