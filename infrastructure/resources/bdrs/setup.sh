
curl -X POST -H "x-api-key: ApiDefaultKey" -H "Content-Type: application/json" -d '{ "bpn": "BPNL000000000SM0", "did": "did:web:sts-mock/oem" }' http://bdrs:8581/api/management/bpn-directory 
echo ""

curl -X POST -H "x-api-key: ApiDefaultKey" -H "Content-Type: application/json" -d '{ "bpn": "BPNL000000000TLB", "did": "did:web:sts-mock/supplier" }' http://bdrs:8581/api/management/bpn-directory 
echo ""

curl -X POST -H "x-api-key: ApiDefaultKey" -H "Content-Type: application/json" -d '{ "bpn": "BPNL000000000VJX", "did": "did:web:sts-mock/consumer" }' http://bdrs:8581/api/management/bpn-directory 
echo ""

curl -X POST -H "x-api-key: ApiDefaultKey" -H "Content-Type: application/json" -d '{ "bpn": "BPNL000000000000", "did": "did:web:sts-mock/trusted-issuer" }' http://bdrs:8581/api/management/bpn-directory 
echo ""
