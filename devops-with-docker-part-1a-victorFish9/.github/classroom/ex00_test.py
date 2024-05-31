import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

assert (
    "Hello from Docker!" in result
), "The output should contain the greeting from the container"

print("Success!")
