import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

secret = "This is the secret message"

assert secret in result, "The secret message was not in the file"

print("Success!")
