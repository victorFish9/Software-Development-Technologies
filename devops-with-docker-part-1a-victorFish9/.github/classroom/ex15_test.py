import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

required = "devopsdockeruh/simple-web-service", "ubuntu", "alpine"

for keyword in required:
    assert (
        keyword in result
    ), f"make sure that {keyword} is included in the command output"

print("Success!")
