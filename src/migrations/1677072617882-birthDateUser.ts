import { MigrationInterface, QueryRunner } from "typeorm";

export class birthDateUser1677072617882 implements MigrationInterface {
    name = 'birthDateUser1677072617882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
    }

}
