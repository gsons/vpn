import requests
import json
import yaml
import base64
import re

def get_ip_arr():
    url = 'https://api.hostmonit.com/get_optimization_ip'
    payload = {"key": "iDetkOys"}
    headers = {"Content-Type": "application/json"}
    
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        return data.get("info", [])
    else:
        return []

def fetch_freecn_node():
    url = "http://dns88.v6.army:5000"
    payload={}
    headers = {'User-Agent': 'shadowrocket'}
    response = requests.request("GET", url, headers=headers, data=payload)
    sstr = base64.b64decode(response.text).decode("utf-8")
    arr = sstr.split('vmess://')

    encoded_data = ''
    for proxy in arr:
        if proxy==''  :continue
        str = base64.b64decode(proxy).decode("utf-8")
        pattern = re.compile(r'"host":\s*("[^"]*"|\s*)')
        mstr = pattern.sub(r'"host": "cloud189-anhui-home.oos-ahwh.ctyunapi.cn"', str)
        match = re.search(r'"port":\s*([^,]*)', mstr)
        port_value = match.group(1) if match else ""
        pattern = re.compile(r'"ps":\s*("[^"]*"|\s*)')
        _mstr = pattern.sub(r'"ps": "电信云盘'+port_value+'"', mstr)
        encoded_data += ('vmess://'+base64.b64encode(_mstr.encode()).decode()+'\n')
        #print(encoded_data)
    encoded_data=base64.b64encode(encoded_data.encode()).decode()
    with open('shadowrocket_cn_base64.txt', 'w',encoding="utf-8") as f:
        f.write(encoded_data)

def main():


    url = "https://neko-warp.nloli.xyz/"

    payload={}
    headers = {
    'User-Agent': 'shadowrocket'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    content = yaml.safe_load(response.text)
    # 提取proxies部分并合并到merged_proxies中
    proxies = content.get('proxies', [])

    #print(proxies);

    result = ''

    index = 0
    for proxy in proxies:
            # 如果类型是wireguard
            if proxy['type'] == 'wireguard' :
                index+=1
                vstr=f"wg://{proxy['server']}:{proxy['port']}?publicKey={proxy['public-key']}&privateKey={proxy['private-key']}&ip={proxy['ip']}&udp=1#白菜云wireguard中速节点{index}"
                result += vstr + '\n'

    host_arr = [
        {'user_id': 'c5d1e036-69f0-4d50-b4d0-bd9c9c73928d', 'host': 'worker-snowy-flower-75f0.qq976955017.workers.dev'},
        {'user_id': '3c46a4d8-1bd8-4b8c-a79a-eedfb9d0a184', 'host': 'worker-wild-salad-5553.976955017.workers.dev'}
    ]
    
    ip_arr = get_ip_arr()
    map_line = {'CM': '移动', 'CU': '联通', 'CT': '电信'}
    
    
    for host_obj in host_arr:
        host_key = host_arr.index(host_obj) + 1
        map_count = {'CM': 0, 'CU': 0, 'CT': 0}
        
        for ip_obj in ip_arr:
            line_name = map_line.get(ip_obj['line'], '')
            map_count[ip_obj['line']]=map_count[ip_obj['line']]+1;
            line_num = map_count[ip_obj['line']];
            if line_num > 1:
                continue
            
            name = f"白菜云高速节点{host_key} {line_name}专线{line_num}"
            vlessMain = f"vless://{host_obj['user_id']}@{ip_obj['ip']}:80?encryption=none&sni={host_obj['host']}&fp=randomized&type=ws&host={host_obj['host']}&path=%2F%3Fed%3D2048#{name}"
            result += vlessMain + '\n'

    
    url = "https://mareep.netlify.app/sub/shadowrocket_base64.txt"
    payload={}
    headers = {
    'User-Agent': 'shadowrocket'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    
    sstr = base64.b64decode(response.text).decode("utf-8")

    sstr = sstr.replace('#','#白菜云慢速节点-')

    print(sstr)

    encoded_data = base64.b64encode(result.encode()).decode()

    with open('shadowrocket_min_base64.txt', 'w',encoding="utf-8") as f:
        f.write(encoded_data)   

    result += sstr     

    encoded_data = base64.b64encode(result.encode()).decode()

    with open('shadowrocket_base64.txt', 'w',encoding="utf-8") as f:
        f.write(encoded_data)
        
if __name__ == "__main__":
    main()
    #fetch_freecn_node()
