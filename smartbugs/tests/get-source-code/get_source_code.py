import csv
from etherscan.contracts import Contract
import json
import time

DELAY = 1  # 1 second (limit: 1 request per second)
CONTRACTS_DIR = 'contracts'

with open('api_key.json', mode='r') as key_file:
    key = json.loads(key_file.read())['key']

with open('all_contracts_with_transaction_sorted_top10.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    contracts_with_code = 0
    contracts_without_code = 0
    for row in csv_reader:
        if line_count > 0:
            address = row[0]
            api = Contract(address=address, api_key=key)
            sourcecode = api.get_sourcecode()
            src_txt = sourcecode[0]['SourceCode']
            if src_txt:
                contracts_with_code += 1
                filename = CONTRACTS_DIR + '/' + address
                print(f'Writing {filename}...')
                with open(filename, 'w') as file:
                    file.write(src_txt)
            else:
                with open('contracts_without_code.txt', 'w') as file:
                    file.write(address)
                contracts_without_code += 1
        line_count += 1

        # delay next request
        time.sleep(DELAY)

    print(f'Processed {line_count} lines.')
    print(f'Contracts with code: {contracts_with_code}')
    print(f'Contracts without code: {contracts_without_code}')
