#version 300 es

precision highp float;
precision highp int;

uniform sampler2D texture_sampler;

in vec2 texcoord;
out vec4 color;

void main() {
    // color = vec4(texcoord.xy, 0.0, 1.0);
    color = texture(texture_sampler, texcoord);
}