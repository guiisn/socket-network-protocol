# Socket

## Clonar repositório

```
git clone https://github.com/guiisn/socket-network-protocol.git
```

## Executar servidor

### Entre no diretório do servidor socket

```
cd server/
```

### Inicie o servidor

```
yarn server
```

## Executar cliente

### Entre no diretório do cliente socket

```
cd client/
```

### Inicie o cliente

```
yarn client
```

## Protocolos prontos para testar

## Casos em que a requisição retornará um status 200, ou seja, sucesso

Entrada:

```
{"operation": "GET", "table": "users", "key": "Guilherme"}
```

Saída esperada:
```
{"success", 200}
```

Entrada:

```
{"operation": "POST", "table": "users", "key": "MARCOS"}
```

Saída esperada:
```
{"success", 200}
```

Entrada:

```
{"operation": "REMOVE", "table": "users", "key": "Guilherme"}
```

Saída esperada:
```
{"success", 200}
```

## Casos em que a requisição retornará um status 900, ou seja, erro interno

Entrada:

```
{"test": "test"}
```

Saída esperada:
```
{"error":900,"message":"Internal server error."}
```
