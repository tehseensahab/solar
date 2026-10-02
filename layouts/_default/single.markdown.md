{{- $cat := "" }}{{ with .GetTerms "categories" }}{{ $cat = (index . 0).LinkTitle }}{{ end -}}
# {{ .Title }}

{{ with .Description }}> {{ . }}

{{ end -}}
- URL: {{ .Permalink }}
- Site: {{ site.Title }} ({{ site.Home.Permalink }})
{{- with $cat }}
- Category: {{ . }}
{{- end }}
{{- if eq .Type "posts" }}
- Published: {{ .Date.Format "2006-01-02" }}
{{- if ne (.Lastmod.Format "2006-01-02") (.Date.Format "2006-01-02") }}
- Updated: {{ .Lastmod.Format "2006-01-02" }}
{{- end }}
{{- with .Params.lastVerified }}
- Last verified: {{ (time .).Format "2006-01-02" }}
{{- end }}
- Author: {{ .Params.author | default site.Params.author }}
{{- end }}
{{- with .Params.takeaways }}

## Key takeaways

{{ range . }}- {{ . }}
{{ end }}
{{- end }}

{{ .RawContent | chomp }}
{{- with .Params.faq }}

## Frequently asked questions
{{ range . }}
### {{ .q }}

{{ .a }}
{{ end }}
{{- end }}
{{- with .Params.imageCredit }}

Image credit: {{ . }}
{{- end }}
