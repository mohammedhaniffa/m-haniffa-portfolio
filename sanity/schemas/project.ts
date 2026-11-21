import {defineField, defineType} from 'sanity';

export const project = defineType({
  name: 'project', title: 'Project', type: 'document',
  fields: [
    defineField({name:'title', title:'Project title', type:'string', validation:r=>r.required()}),
    defineField({name:'slug', title:'URL slug', type:'slug', options:{source:'title', maxLength:96}, validation:r=>r.required()}),
    defineField({name:'category', title:'Category', type:'string', options:{list:[{title:'Interior Design',value:'Interior Design'},{title:'Architecture',value:'Architecture'},{title:'3D Visualization',value:'3D Visualization'},{title:'Furniture Design',value:'Furniture Design'},{title:'Commercial Design',value:'Commercial Design'}]}, validation:r=>r.required()}),
    defineField({name:'year', title:'Year', type:'string'}),
    defineField({name:'location', title:'Location', type:'string'}),
    defineField({name:'summary', title:'Short introduction', type:'text', rows:3, validation:r=>r.required()}),
    defineField({name:'description', title:'Full project description', type:'array', of:[{type:'block'}]}),
    defineField({name:'coverImage', title:'Cover image', type:'image', options:{hotspot:true}, validation:r=>r.required()}),
    defineField({name:'gallery', title:'Project gallery', type:'array', of:[{type:'image', options:{hotspot:true}}]}),
    defineField({name:'featured', title:'Feature on homepage', type:'boolean', initialValue:false}),
    defineField({name:'sortOrder', title:'Display order (smaller appears first)', type:'number', initialValue:100})
  ],
  preview:{select:{title:'title',subtitle:'category',media:'coverImage'}}
});
