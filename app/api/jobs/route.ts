import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'job_data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const jobData = JSON.parse(fileContent);

  return NextResponse.json(jobData);
}
