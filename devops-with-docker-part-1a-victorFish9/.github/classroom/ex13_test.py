import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

secret = "You can find the source code here: https://github.com/docker-hy"

assert secret in result, "The secret message was not in the file"

print("Success!")
