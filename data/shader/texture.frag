#version 330
uniform sampler2D color_sampler;

in vec2 texcoord;
out vec4 color;

void main() {
    // color = vec4(texcoord.xy, 0.0, 1.0);
    color = texture(color_sampler, texcoord);
}