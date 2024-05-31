import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

assert (
    "devopsdockeruh/simple-web-service:alpine" in result
), "Your image must be based on the simple-web-service"

assert "server" in result, "The image must contain the server command"


print("Success!")
