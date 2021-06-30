export abstract class AppConfig {
  static readonly API_URL =
    process.env.API_URL || 'https://ancient-cliffs-89658.herokuapp.com';
  static readonly POSTS_URL = `${AppConfig.API_URL}/posts`;
  static readonly SITE_NAME = 'Renato Lomba';
  static readonly SITE_URL = process.env.SITE_URL || 'http://127.0.0.1:3000';
}
