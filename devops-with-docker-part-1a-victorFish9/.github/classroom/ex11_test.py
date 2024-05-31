import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

assert result.count("Up") >= 1, "There should be one running container (STATUS Up)"
assert result.count("Exited") >= 2, "There should be two exited containers (STATUS Exited)"

print("Success!")
