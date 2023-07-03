import secrets

def generate_random_token(length=32):
    token = secrets.token_hex(length // 2)
    return token

random_token = generate_random_token()
print(random_token)
