import subprocess, sys
print('Running migrate...')
proc = subprocess.run([sys.executable, 'manage.py', 'migrate', '--no-input'], capture_output=True, text=True)
print('returncode', proc.returncode)
print(proc.stdout)
print(proc.stderr)
