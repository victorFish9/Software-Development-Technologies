import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

assert "curl" in result, "Make sure to include all commands used"

print("Success!")
