N = int(input())
a = list(map(int, input().split()))
res = 0
for i in range(N):
    if a[i] > 0 :
        res = res + 1
print(res)