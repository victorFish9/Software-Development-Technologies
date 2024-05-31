import sys

result = sys.stdin.read()

print(result)
print("\n" + "=" * 80 + "\n")

assert "hello-world" not in result, "The container and image `hello-world` should be removed"
assert "CONTAINER ID" in result, "docker ps -as should output the column title `CONTAINER ID`"
assert "REPOSITORY" in result, "docker images should output the column title `REPOSITORY`"

print("Success!")
