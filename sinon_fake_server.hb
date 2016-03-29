module.exports = [ {{#each log.entries}}
  {
    {{#request}}method:  "{{method}}",
    url: "{{{url}}}", {{/request}}
    {{#response}}status: {{status}},
    headers: { {{#each headers}}
      "{{name}}": "{{value}}"{{^last}},{{/last}} {{/each}}
    },
    response: {{{content.text}}} {{/response}}
  }{{^last}},{{/last}}{{/each}}
]
