import * as fs from 'fs';

const content = fs.readFileSync('src/chapters/Catalogo.tsx', 'utf-8');

const regex = /<h3 className="text-xl font-bold text-indigo-300 mb-2">(.*?)<\/h3>\s*<p className="text-slate-400 text-sm mb-4">(.*?)<\/p>\s*<div className="bg-slate-800\/50 p-4 rounded-xl border border-slate-700">\s*<div className="flex justify-between items-start mb-2">\s*<p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA<\/p>\s*<CopyButton text="(.*?)" \/>/gs;

const typeRegex = /<span className="px-3 py-1 rounded-full text-xs font-bold bg-[^"]+">([^<]+)<\/span>\s*<\/div>\s*<h3 className="text-xl font-bold text-indigo-300 mb-2">(.*?)<\/h3>/gs;

let types: Record<string, string> = {};
let match2;
while ((match2 = typeRegex.exec(content)) !== null) {
  types[match2[2]] = match2[1];
}

let tableRows = '';
let match;
while ((match = regex.exec(content)) !== null) {
  const title = match[1];
  const desc = match[2];
  const example = match[3].replace(/"/g, '&quot;');
  const type = types[title] || 'Desconocido';
  
  let typeColor = '';
  if (type === 'Básico') typeColor = 'text-emerald-400';
  else if (type === 'Intermedio') typeColor = 'text-amber-400';
  else if (type === 'Avanzado') typeColor = 'text-red-400';
  else if (type === 'Frontera 2026') typeColor = 'text-purple-400';

  tableRows += `
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">${title}</td>
              <td className="p-3"><span className="${typeColor} font-semibold text-xs uppercase tracking-wider">${type}</span></td>
              <td className="p-3 text-slate-300 text-sm">${desc}</td>
              <td className="p-3 text-slate-400 text-sm italic">"${example}"</td>
            </tr>`;
}

fs.writeFileSync('table_rows.txt', tableRows);
