```mermaid
sequenceDiagram
  box Red 
  participant Attacker
  participant BotNet

  Attacker-->> BotNet: Attacker infects a large network<br/> of computers by installing<br/> malware
  BotNet -->> Attacker: BotNet and included computers<br/> are now under the control of the attacker

box Green
  create participant Firewall
  create participant WebServer 

```
