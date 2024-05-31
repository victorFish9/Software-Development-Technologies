import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

assert (
    "FROM" in result and "ubuntu" in result
), "Your image should be based on the Ubuntu base image"

assert "curl" in result, "Curl needs to be installed"

assert "script.sh" in result, "The script.sh needs to be executed"


print("Success!")
