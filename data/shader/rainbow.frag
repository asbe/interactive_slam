#version 300 es

precision highp float;
precision highp int;


uniform int color_mode;
uniform vec2 z_range;
uniform int z_clipping;

in vec4 frag_color;
flat in ivec4 frag_info;
in vec3 frag_world_position;

layout (location=0) out vec4 color;
layout (location=1) out ivec4 info;

void main() {
    if(z_clipping != 0 && color_mode == 0 && (frag_world_position.z < z_range[0] || frag_world_position.z > z_range[1])) {
        discard;
    }

    color = frag_color;
    info = frag_info;
}