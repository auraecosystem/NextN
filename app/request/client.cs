using System;
using System.Net.Http;
using System.Text;

var client = new HttpClient();
client.DefaultRequestHeaders.Add("Authorization", "Bearer ");
var response = await client.GetAsync("https://api.machines.dev/v1/apps?org_slug=string");
var responseBody = await response.Content.ReadAsStringAsync();
