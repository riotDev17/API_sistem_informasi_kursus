import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreatePendaftaranValidation,
  UpdatePendaftaranValidation,
} from '../validation/PendaftaranValidation.js';

// GET
const GetPendaftaranService = async () => {
  return prismaClient.pendaftaran.findMany({
    select: {
      id_pendaftaran: true,
      nisn: true,
      nis: true,
      nik: true,
      nama_lengkap: true,
      jenis_kelamin: true,
      pas_foto: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      email: true,
      no_telepon: true,
      alamat: true,
      nama_ayah: true,
      pekerjaan_ayah: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ayah: true,
      pendidikan_ayah: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ayah: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      nama_ibu: true,
      pekerjaan_ibu: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ibu: true,
      pendidikan_ibu: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ibu: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      slip_gaji_ayah_ibu: true,
      foto_kk: true,
      sekolah: {
        select: {
          id_sekolah: true,
          npsn: true,
          nama_sekolah: true,
          alamat: true,
          kode_pos: true,
          status_sekolah: true,
          jenjang_pendidikan: true,
          akreditasi: true,
          email_sekolah: true,
          no_telepon_sekolah: true,
        },
      },
      nilai_semester_1: true,
      nilai_semester_2: true,
      nilai_semester_3: true,
      nilai_semester_4: true,
      nilai_semester_5: true,
      nilai_semester_6: true,
      raport: true,
      prestasi: true,
      kursus: {
        select: {
          id_kursus: true,
          nama_kursus: true,
          topik_kursus: true,
          jenjang_kursus: true,
          pengajar: {
            select: {
              id_pengajar: true,
              nama_pengajar: true,
              no_telepon_pengajar: true,
              gelar_pengajar: true,
              keahlian_pengajar: true,
              pengalaman_pengajar: true,
              foto_pengajar: true,
              sertifikat_pengajar: true,
            },
          },
          jam_mulai: true,
          jam_selesai: true,
          tanggal_mulai: true,
          tanggal_selesai: true,
          hari_kursus: true,
          harga_kursus: true,
          foto_kursus: true,
          syarat_kursus: true,
          deskripsi_kursus: true,
          modul_kursus: true,
        },
      },
      users: {
        select: {
          id_users: true,
          nama: true,
          email: true,
          username: true,
          role: true,
          verifikasi_email: true,
          tanggal_verifikasi_email: true,
          foto_profil: true,
          tempat_lahir: true,
          tanggal_lahir: true,
          jenis_kelamin: true,
          no_telepon: true,
          alamat: true,
          instagram: true,
          whatsapp: true,
        },
      },
      status_pendaftaran: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// GET BY USERS
const GetPendaftaranByUserService = async (users) => {
  const pendaftaran = await prismaClient.pendaftaran.findFirst({
    where: {
      users_ID: users.id_user,
    },
    select: {
      id_pendaftaran: true,
      nisn: true,
      nis: true,
      nik: true,
      nama_lengkap: true,
      jenis_kelamin: true,
      pas_foto: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      email: true,
      no_telepon: true,
      alamat: true,
      nama_ayah: true,
      pekerjaan_ayah: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ayah: true,
      pendidikan_ayah: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ayah: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      nama_ibu: true,
      pekerjaan_ibu: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ibu: true,
      pendidikan_ibu: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ibu: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      slip_gaji_ayah_ibu: true,
      foto_kk: true,
      sekolah: {
        select: {
          id_sekolah: true,
          npsn: true,
          nama_sekolah: true,
          alamat: true,
          kode_pos: true,
          status_sekolah: true,
          jenjang_pendidikan: true,
          akreditasi: true,
          email_sekolah: true,
          no_telepon_sekolah: true,
        },
      },
      nilai_semester_1: true,
      nilai_semester_2: true,
      nilai_semester_3: true,
      nilai_semester_4: true,
      nilai_semester_5: true,
      nilai_semester_6: true,
      raport: true,
      prestasi: true,
      kursus: {
        select: {
          id_kursus: true,
          nama_kursus: true,
          topik_kursus: true,
          jenjang_kursus: true,
          pengajar: {
            select: {
              id_pengajar: true,
              nama_pengajar: true,
              no_telepon_pengajar: true,
              gelar_pengajar: true,
              keahlian_pengajar: true,
              pengalaman_pengajar: true,
              foto_pengajar: true,
              sertifikat_pengajar: true,
            },
          },
          jam_mulai: true,
          jam_selesai: true,
          tanggal_mulai: true,
          tanggal_selesai: true,
          hari_kursus: true,
          harga_kursus: true,
          foto_kursus: true,
          syarat_kursus: true,
          deskripsi_kursus: true,
          modul_kursus: true,
        },
      },
      users: {
        select: {
          id_users: true,
          nama: true,
          email: true,
          username: true,
          role: true,
          verifikasi_email: true,
          tanggal_verifikasi_email: true,
          foto_profil: true,
          tempat_lahir: true,
          tanggal_lahir: true,
          jenis_kelamin: true,
          no_telepon: true,
          alamat: true,
          instagram: true,
          whatsapp: true,
        },
      },
      status_pendaftaran: true,
    },
  });

  if (!pendaftaran) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  return pendaftaran;
};

// CREATE
const CreatePendaftaranService = async (users, request) => {
  const existingPendaftaran = await prismaClient.pendaftaran.findFirst({
    where: {
      users_ID: users.id_user,
    },
  });

  if (existingPendaftaran) {
    throw new ResponseError(409, 'User Sudah Melakukan Pendaftaran Kursus!');
  }

  const pendaftaran = await Validation(CreatePendaftaranValidation, request);

  pendaftaran.users_ID = users.id_user;
  pendaftaran.status_pendaftaran = 'Diproses';

  return prismaClient.pendaftaran.create({
    data: pendaftaran,
    select: {
      id_pendaftaran: true,
      nisn: true,
      nis: true,
      nik: true,
      nama_lengkap: true,
      jenis_kelamin: true,
      pas_foto: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      email: true,
      no_telepon: true,
      alamat: true,
      nama_ayah: true,
      pekerjaan_ayah: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ayah: true,
      pendidikan_ayah: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ayah: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      nama_ibu: true,
      pekerjaan_ibu: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ibu: true,
      pendidikan_ibu: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ibu: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      slip_gaji_ayah_ibu: true,
      foto_kk: true,
      sekolah: {
        select: {
          id_sekolah: true,
          npsn: true,
          nama_sekolah: true,
          alamat: true,
          kode_pos: true,
          status_sekolah: true,
          jenjang_pendidikan: true,
          akreditasi: true,
          email_sekolah: true,
          no_telepon_sekolah: true,
        },
      },
      nilai_semester_1: true,
      nilai_semester_2: true,
      nilai_semester_3: true,
      nilai_semester_4: true,
      nilai_semester_5: true,
      nilai_semester_6: true,
      raport: true,
      prestasi: true,
      kursus: {
        select: {
          id_kursus: true,
          nama_kursus: true,
          topik_kursus: true,
          jenjang_kursus: true,
          pengajar: {
            select: {
              id_pengajar: true,
              nama_pengajar: true,
              no_telepon_pengajar: true,
              gelar_pengajar: true,
              keahlian_pengajar: true,
              pengalaman_pengajar: true,
              foto_pengajar: true,
              sertifikat_pengajar: true,
            },
          },
          jam_mulai: true,
          jam_selesai: true,
          tanggal_mulai: true,
          tanggal_selesai: true,
          hari_kursus: true,
          harga_kursus: true,
          foto_kursus: true,
          syarat_kursus: true,
          deskripsi_kursus: true,
          modul_kursus: true,
        },
      },
      users: {
        select: {
          id_users: true,
          nama: true,
          email: true,
          username: true,
          role: true,
          verifikasi_email: true,
          tanggal_verifikasi_email: true,
          foto_profil: true,
          tempat_lahir: true,
          tanggal_lahir: true,
          jenis_kelamin: true,
          no_telepon: true,
          alamat: true,
          instagram: true,
          whatsapp: true,
        },
      },
      status_pendaftaran: true,
    },
  });
};

// CHANGE STATUS DIVERIFIKASI
const ChangeStatusPendaftaranVerifyService = async (pendaftaranId) => {
  const pendaftaran = await prismaClient.pendaftaran.findFirst({
    where: {
      id_pendaftaran: pendaftaranId,
    },
  });

  if (!pendaftaran) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  if (pendaftaran.status_pendaftaran === 'Diverifikasi') {
    throw new ResponseError(409, 'Pendaftaran Sudah Diverifikasi!');
  }

  return prismaClient.pendaftaran.update({
    where: {
      id_pendaftaran: pendaftaranId,
    },
    data: {
      status_pendaftaran: 'Diverifikasi',
    },
  });
};

// CHANGE STATUS DITOLAK
const ChangeStatusPendaftaranRejectService = async (pendaftaranId) => {
  const pendaftaran = await prismaClient.pendaftaran.findFirst({
    where: {
      id_pendaftaran: pendaftaranId,
    },
  });

  if (!pendaftaran) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  if (pendaftaran.status_pendaftaran === 'Ditolak') {
    throw new ResponseError(409, 'Pendaftaran Sudah Ditolak!');
  }

  return prismaClient.pendaftaran.update({
    where: {
      id_pendaftaran: pendaftaranId,
    },
    data: {
      status_pendaftaran: 'Ditolak',
    },
  });
};

// UPDATE
const UpdatePendaftaranService = async (users, request) => {
  const pendaftaran = await Validation(UpdatePendaftaranValidation, request);
  const pendaftaranExist = await prismaClient.pendaftaran.findFirst({
    where: {
      id_users: users.id_users,
      id_pendaftaran: pendaftaran.id_pendaftaran,
    },
  });

  if (!pendaftaranExist) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  pendaftaran.status_pendaftaran = 'Diproses';
  return prismaClient.pendaftaran.update({
    where: {
      id_pendaftaran: pendaftaran.id_pendaftaran,
    },
    data: pendaftaran,
    select: {
      id_pendaftaran: true,
      nisn: true,
      nis: true,
      nik: true,
      nama_lengkap: true,
      jenis_kelamin: true,
      pas_foto: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      email: true,
      no_telepon: true,
      alamat: true,
      nama_ayah: true,
      pekerjaan_ayah: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ayah: true,
      pendidikan_ayah: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ayah: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      nama_ibu: true,
      pekerjaan_ibu: {
        select: {
          id_pekerjaan: true,
          nama_pekerjaan: true,
        },
      },
      no_telepon_ibu: true,
      pendidikan_ibu: {
        select: {
          id_pendidikan: true,
          nama_pendidikan: true,
        },
      },
      penghasilan_ibu: {
        select: {
          id_penghasilan: true,
          jumlah_penghasilan: true,
        },
      },
      slip_gaji_ayah_ibu: true,
      foto_kk: true,
      sekolah: {
        select: {
          id_sekolah: true,
          npsn: true,
          nama_sekolah: true,
          alamat: true,
          kode_pos: true,
          status_sekolah: true,
          jenjang_pendidikan: true,
          akreditasi: true,
          email_sekolah: true,
          no_telepon_sekolah: true,
        },
      },
      nilai_semester_1: true,
      nilai_semester_2: true,
      nilai_semester_3: true,
      nilai_semester_4: true,
      nilai_semester_5: true,
      nilai_semester_6: true,
      raport: true,
      prestasi: true,
      kursus: {
        select: {
          id_kursus: true,
          nama_kursus: true,
          topik_kursus: true,
          jenjang_kursus: true,
          pengajar: {
            select: {
              id_pengajar: true,
              nama_pengajar: true,
              no_telepon_pengajar: true,
              gelar_pengajar: true,
              keahlian_pengajar: true,
              pengalaman_pengajar: true,
              foto_pengajar: true,
              sertifikat_pengajar: true,
            },
          },
          jam_mulai: true,
          jam_selesai: true,
          tanggal_mulai: true,
          tanggal_selesai: true,
          hari_kursus: true,
          harga_kursus: true,
          foto_kursus: true,
          syarat_kursus: true,
          deskripsi_kursus: true,
          modul_kursus: true,
        },
      },
      users: {
        select: {
          id_users: true,
          nama: true,
          email: true,
          username: true,
          role: true,
          verifikasi_email: true,
          tanggal_verifikasi_email: true,
          foto_profil: true,
          tempat_lahir: true,
          tanggal_lahir: true,
          jenis_kelamin: true,
          no_telepon: true,
          alamat: true,
          instagram: true,
          whatsapp: true,
        },
      },
      status_pendaftaran: true,
    },
  });
};

// DELETE
const DeletePendaftaranService = async (pendaftaranId) => {
  const pendaftaran = await prismaClient.pendaftaran.findFirst({
    where: {
      id_pendaftaran: pendaftaranId,
    },
  });

  if (!pendaftaran) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  return prismaClient.pendaftaran.delete({
    where: {
      id_pendaftaran: pendaftaranId,
    },
  });
};

export default {
  GetPendaftaranService,
  CreatePendaftaranService,
  GetPendaftaranByUserService,
  ChangeStatusPendaftaranVerifyService,
  ChangeStatusPendaftaranRejectService,
  UpdatePendaftaranService,
  DeletePendaftaranService,
};
