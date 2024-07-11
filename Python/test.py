import sys
l = sys.stdin.readline().replace('\n', '').split('.')
l.reverse()
print('-'.join(l))